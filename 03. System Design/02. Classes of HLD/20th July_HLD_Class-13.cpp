Date : 20th July 2024
Mentor: DEVANG SHARMA
Batch: May Batch (System Design) - Tutort Academy

Agenda: System Design - Case Studies

(1) System Design Interviews: A step by step guide: DONE
(2) Designing a URL Shortening service like TinyURL: DONE
(3) Designing Pastebin: DONE

(4) Designing Instagram: DONE
(5) Designing Facebook Feed: DONE
(6) Designing Twitter: DONE

(7) Designing Dropbox/Google Drive/OneDrive: DONE

(8) Design Netflix/Youtube/Hotstar: WIP
(9) Design Whatsapp/FB Messenger/Chat Application

"Please Type 'Hi' in the Chat Box if you have joined and Can See this Screen".




-----------> Case Study - 7: Designing Video Streaming Services - Youtube or Netflix or Hotstar



Youtube/Netflix/Hotstar:
Users of the Service can upload (YT), view, share, rate, comments and report videos.




(1) Requirements Clarification:

(A) Functional Requirements:

- User should be able to upload videos
- User should be able to share and view videos
- User should be able to search based upon video titles
- User should be able to add and view comments on videos
- User should be able to like and report videos
- Our service should be able to keep record of stats of videos (likes/dislikes, total number of views, subscribers etc)
- User should be able to subscribe to a channel


(B) Non-Functional Requirements:

- Our service should be very Highly Reliable,
Any Video uploaded should not be lost.

- Our Service should be highly available

Availability > Consistency

Consistency can take a hit. If a user doesnt see a video for few milliseconds, its fine.

- Users should have a real time experience while watching videos and should not feel any lag.
(Pointer: To Effectively manage the Client Bandwidth, YT Uses Codec-Encoding)



Eg:


Bandwidth: 100 MBps ------> Video in 4K -------> Sudden Bandwidth reduces to : 100 Kbps
(Wifi)                                           (Mobile Data)
										-------> Video: 240P
										-------> User Experience NOT Compromised
										-------> Sudden Bandwidth increased	to: 100 MBps
										-------> Video: 4K



7-8 Years Ago: Buffering (Circle)





(C) Additional Requirements:

- Video Recommendations
- Trending Videos
- Channel Subscriptions
- Watch Later










(2) Capacity Estimation and Constraints (Back of the Envelope Estimation)



Monthly Active Users: 1.5 Bn
Daily Active Users: 800 Mn


(1) View and Upload Estimates

On Average, 1 User Views: 5 Videos a Day

Total Vidoes Watched in a Day = 800 Mn * 5 Videos = 4 Bn Videos

Total Video Watched in a second = 800 Mn * 5 Videos / 86400 sec ~= 46000 Videos/sec


Youtube:
Read-Heavy or Write-Heavy?


More Read-Heavy as compared to Twitter, Instagram etc


Read-Write: 200:1

Total Videos Uploaded in a second = 46000/ 200 = 230 Videos/sec
(Write Calls)



Summary:

System with Uploads: 230 Videos/sec
System with Views: 46000 Videos/sec







(2) Storage Estimates

Assuming, Every Second 500 Hours of Videos are uploaded.
(230 Videos * 60 second * 10 mins (avg video duration))


Hours of content uploaded every minute
= (230 Videos * 60 seconds * 10 mins) / 60 * 60 


1 Minute of Video Requires
= 50 MB of Storage


Codec-Encoding:

1080P -> Youtube -> Formats:  4K, 1080p, 720p, 480p, 240p etc

480P -> Youtube -> Formats:  480p, 240p etc


Build:


"Customer First"


Who? -> Global

Countries: 
(1) Limited Access to Internet
(2) Extremely High Internet
(3) Moderate Internet Network



Total Storage Required for Video Upload in a Minute
= 500 Hours * 60 Min * 50 MB = 1500 GB/min = 25 GB/sec


Note: These Numbers are before Video Compression and Replication



Workflow:

Video ---> Thumbnail ---> Captions (Title + Description) -----> Upload  -----> Processing ---------> Final Link
																			 (Copyright Checks, Audio Used, Duplicacy etc)
					

Summary:

Write:

	Total Storage per second = 25 GB/sec
	Total Storage per year = 25 GB * 60 * 60 * 24 * 365









(3) System API


(1) Upload Video - WRITE

Request:

uploadVideo(user_uuid, video_title, video_desc, tags[], categories[], default_language, recording_details, thumbnail_pic, actual_video)

Parameters:

(1) user_uuid: A unique Identifer assigned with each user, can also be used for Rate Limiting (Throttling)
(2) video_title: STRING (255 chars)
(3) video_desc: STRING
(4) tags[]: STRING[]
(5) categories: STRING[]
(6) default_language: STRING
(7) recording_details: Object containing details like Location, Metadata etc
(8) thumbnail_pic: Image
(9) actual_video: Video to be uploaded: MEDIA



Response:


(1) Success Case:

Status Code: 202 (Request Accepted)
Video URL: String


Eg: 

{
	status: 202,
	link: https://youtube.com/leosjkkjk
}



Note:

URL (Link) is generated before, but Video is actually processing, its available after
Processing Only (20-40 mins)

An Email is sent after Successfully Processing.



(2) Non-Success Case:

Status Code: 4xx/5xx
















(2) Search a Video - READ


Request:

searchVideo(user_uuid, search_query, user_location)

Parameters:

(1) user_uuid: A unique Identifer assigned with each user, can also be used for Rate Limiting (Throttling)
(2) search_query: STRING
(3) user_location: STRING


Note:

user_location:
Some Contents are restricted to a Geo-Location

Eg:
Netflix India and Netflix US have different contents.


Response:

JSON


{
	video-1 : {
		name:
		thumbnail:
		view count:
		date:
	},

	video-2 : {
		name:
		thumbnail:
		view count:
		date:
	},

	etc till pagination response
}





Search:

(1) Fuzzy Search:
Based upon User Activity/Recommendations

Eg:
"Cricket"

From your history/likes/feeds./activity:
Pop best videos related to user activity on top.


(2) Non-Fuzzy Search: 
Clear Match with the Keywords: Video Title, Person, Channel Based

Eg:
"Tutort Academy"

Show Tutort Academy Channel/Videos on Youtube

















(3) View/Stream a Video - READ

Request:

streamVideo(user_uuid, video_uuid, offset, codec_encoding_and_resolution)

Parameters:

(1) user_uuid: A unique Identifer assigned with each user, can also be used for Rate Limiting (Throttling)
(2) video_uuid: STRING: A unique Identifer assigned with each video
(3) offset: number

Offset is time in seconds relative from the beginning
Given for specific chunk.


Use Case:
(1) Resume Video from Watched till last time
(2) Stream Video for multiple devices resuming from last seen/watched


Real Example:
Done 

Explained Offset, Chunks, Fetch on the Go vs Fetch on the Static Part in Youtube


(4) codec_encoding_and_resolution : STRING


codec_encoding: DEVICE_TYPE: Mobile/ PC etc
resolution: BANDWIDTH + DEVICE_TYPE: 1080p, 720p, etc



Eg:
https://youtu.be/SbBlBvpK8Z8?t=20




Response:


STREAM

A Media Stream (Chunk) from the Given Offset


















(4) High Level Design (HLD)

Image: HLD Diagram

(1) Processing-Queue: Each uploaded video will be pushed for Encoding, Thumbnail Generation, Legal Checks and Storage

(2) Encoder: To encode each uploaded video into multiple formats

(3) Thumbnail Generator: Generate Thumbnails for a Video

(4) Video Storage: Distributed File Strorage

(5) Thumbnail Storage: Distributed File Strorage

(6) User Database: Store Information Related to Users Eg: Name, Email, Location etc

(7) Video Metadata Storage: A Metadata Storage to store all Information about a Video

Eg:

- File Path
- Uploading User
- Total Views
- Total Likes
- Comments
etc




Why we should separate Thumbnail vs Video Storage?


There will be LOT MORE Thumbnails than Videos.
On Assumption, 1 Video can have upto 5 Thumbnails



For Thumbnails,
We need to have a VERY EFFICIENT Storage System that can serve a huge traffic


Consideration:

(1) Thumbnails are small files, roughly 5 KB (After Compression)
(2) Read Traffic for Thumbnails are MUCH Larger as compared to Videos.

(A) Use Case-1: View a Video
When you are viewing 1 video at a time,
but you will be viewing at page that has 20 thumbnails of other videos.


(B) Use Case-2: Search
When you search in search bar, 
Video is NOT Viewed till its clicked, but all thumbnails are viewed.


(C) Use Case - Home Page
When you are on home page, not watching any video
Still, you are watching 100s of thumbnails















(5) DB Schema




(A) User Database - SQL

- user_uuid: STRING: PK
- Name: VARCHAR
- Email: VARCHAR
- Age: INT
- Location: latitude, longitude


(B) Video Metadata Storage

- video_uuid: STRING: PK
- Title: VARCHAR
- Description: VARCHAR
- Size: INT
- Thumbnail_Location: VARCHAR
- Video_Location: VARCHAR
- author: VARCHAR: user_uuid
- No of Likes: INT
- No of Comments: INT
- No of Views: LONG (To Avoid Int Overflow)

For Each Video Comment:

- Comment_ID: PK
- video_uuid
- user_uuid
- Timestamp
- Comment_Content
- Likes
- Replies: Type: Comment








- No of Likes: INT
- No of Comments: INT
- No of Views: INT


int: -2 Bn to +2 Bn



- No of Views: INT: Sensitive


int_32:
int_64:


Case Study:

Gangnam Style -> 2010

First Video in World to reach 1Bn Views.

Limit: 1 Bn: Int Overflow

No of Views: int

It crossed, 1 Bn Views:
Views -> Negative Values

What Changed?

int -> long 

















