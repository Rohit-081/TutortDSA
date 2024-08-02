Date : 13th July 2024
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

(8) Designing Yelp/Justdial/Sulekha
(9) Designing Uber/Grab/Ola

(10) Design Netflix/Youtube/Hotstar

Extra:
- Payment System and
- Trading app like Zerodha 

"Please Type 'Hi' in the Chat Box if you have joined and Can See this Screen".








(3) Synchronisation Service


(A) The Synchronisation Service is the component that process file updates
made by a client and apply those changes to other devices.


(B) It also synchronises clients local internal database with the information in the 
cloud storage (Similar to: git status)

(C) Most Important part of architecture due to its critical role in managing 
the metadata and synchronizing users files.


(D) Desktop clients communicate with Synchronisation Service to either 
obtain or download from the Cloud Storage.


Diagram:


Desktop Client ---------> Synchronisation Service ---------> Cloud Storage
(Utility)                    Upload/Download 


(E) If a client is offline,
as soon as they come back online, it polls the system for new updates and pushes it
(pull then push)

git pull
git push


(F) When the Synchronisation Service receives any update request, 
it checks with the metadata database for consistency and then proceeds for update.


(G) Finally make changes to all other devices


(H) Synchronisation Service can employ an efficient differencing algorithm to reduce 
the amount of bandwidth consumed.


(I) Efficient Differencing Algorithm:

- Just identify the difference between two versions of the file
- Only update the difference chunk
- Decreased the bandwidth


(J) Servers and Clients calculate a HASH (SHA-256) to see 
whether there is any update in the local or not


(K) On the Server Side, if we already have a chunk present with the same hash,
we dont need to create another copy, utilise the same.








Devices: A, B, C


Final Diagram:


Desktop Client --------> Synchronisation Service -------> Cloud Storage --------> Device B an C
(Utility)                  Upload/Download 
Device-A


(1) Update Client (Device-A) with the Local Metadata and be in sync with Cloud Storage
(2) Push the sync changes to all other devices (Devices - B and C)





Devices: A, B, C


Device-A:


Folder(Local) ------> File ------> Cloud Storage ----> Synced with Other Devices (B and C)



Source of Truth:
(1) For Cloud Storage: The Client making the changes will be the Source of Truth
(2) For Other Devices: Cloud Storage will be the Source of Truth







------> Handle Concurrency:

Bookmyshow

1 Seat: 100 People

User-A: Write: 10 minutes

(1) Isolation Level: Transaction Levels
(2) Timestamp base changed using FCFS












(4) Cloud Storage

- Object/Blob Storage
- Stores chunks of files uploaded by users
- Clients can directly interact with cloud storage to send
and receive objects from it
- Separation of metadata from cloud storage will help us to identify 
the changes in cloud.


DB: AWS, GCP, Azure etc







(7) File Processing Workflow:


Sequence: 
Clients: A, B, C


Scenario:
Client A updates a file that is shared with B and C


Step-By-Step Flow:

(1) Client A updates the metadata and commit changes
(2) Client A uploads chunks to cloud storage
(3) Client A gets confirmation of upload
(4) Cloud Storage will send notification to Clients B and C
(5) Clients B and C will pull from Cloud Storage and receives the chunk updates.












(8) Data De-Duplication


- Data de-duplication is a technique used for eliminating duplicate copies
or data to improve storage utilisation

- Can also be applied to network data transfers to reduce network bandwidth


(A) Post Process De-Duplication

(1) With post-process de-duplication, 
New Chunks are stored first on the storage device
and then later some process analyzes the data looking for duplication.

(2) Advantages:
The Client will not need to wait for hash calculation or lookup before storing the data


(3) Disadvantages:
(A) We will unnecessarily stored a duplicated file
(B) Consuming Bandwidth







(B) In-Line De-Duplication (ON THE GO)

(1) Hash Calculations (SHA-256) can be done in real-time
as the clients are making changes to data on their device

(2) If our system identifies a chunk that is alreayd present,
it wil update the same to client



A.cpp -> Upload
B.cpp -> Rename -> A.cpp -> Upload

G-Drive:
There is already a file present with same name.















(9) Metadata Partitioning (Metadata DB - SQL)


- To scale out our Metadata DB, we need to Partition it 
so that it can store information about billions of users and files

- We need to come up with an effective Partitioning scheme that would
divide and store our data in different DB Servers.



(1) Vertical Partitioning

- We partition our database in such a way that we store schema/table related 
to one particular feature on one server


Eg:

Twitter

- Write_Tweet: DBP-1
- Rewteet: DBP-2
- Like: DBP-3
- User_Profile: DBP-4


Adv:
- Very Easy and Straight Forward to Implement


Disadv:
(1) Since the Partitioning is based upon features, it can lead to non-uniformed load
or might require further partitioning for partitions having very high load


Eg: Trillions of Files/Chunks to be stored, Our DB Partition cannot support that,
and might require further partitioning


(2) Joining multiple tables/schemas in separate databases
can cause performance and consistency issues.







(2) Range Based Partitioning

- We partition based upon ranges (based upon a number, character etc)
This is called range based partitioning.


We can store files/chunks based upon the first letter of the Filepath.


Files Starting with Letter 'A': DBP-1
Files Starting with Letter 'B': DBP-2
Files Starting with Letter 'C': DBP-3
Files Starting with Letter 'D': DBP-4
Files Starting with Letter 'E': DBP-5


Disadvantages:
Main problem is that it can lead to unbalanced loads on server.


Eg:
Number of Files starting with 'A' != Number of Files starting with 'Z'







(3) Hash Based Partitioning

In Hash Based Partitioning,
We take the hash of the object we are storing and based upon this hash value, we calculate
the DB Partition to which this object should be stored into.


In our case,
We can take hash of "File_ID" of the File Object that we are going to store to determine the partition.


Our Hash Function will randomly re-distribute objects into different partitions.


Hash Function: File_ID % 256 = Hash Value


Filename: name.pdf	
File_ID: 123456

This approach can lead to solving unbalanced partitions following a round-robin fashion.




Map: (In Synchronisation Service)
File_ID: DB Partition








(10) Caching

- Which Cache (Why?)
- Size of Cache (80-20 Rule)
- Which Cache Eviction Policy? (Why)
- Handle Cache Invalidation (Cache Miss Case)



Cache:

We need a very highly scalable photo delivery system across the globe.
Our service should be able to push its content closest to the servers distributed globally
Hence, we use CDN.




-----> Which Cache

Google Drive: Similar to Hazelcast
Twitter: Uses 3 Clusters of Redis

Cache:
Cache the URLs that are frequently used

Eg: Redis, Memcache, Hazelcast


The Application Servers, before hitting the DB Storage ------> Quickly check in Cache



-------> Size of Cache



Following 80-20 Rule for Cache:
Cache 20% of my data


To Store 20% of these Requests:

0.2 * 48 TB/Day = 8 TB of Cache Memory/Day






------> Which Cache Eviction Policy? 


When the cache is full, and we want to replace a content with a newer content


LRU can be a good solution.
Discard the least recently used content first and store the new content






---------> How can each replica of cache be updated?

In Case of Cache Miss,
Request will go to Database


When this happens,
After Retrieving from Database, we can update the Cache and pass the new entry to all replicas.


- Each replica can update its cache by adding the new entry
- If a replica already has that entry, ignore it.







(11) Load Balancers

Where do we Add Load Balancers:

(1) Between Client and Application Servers
(2) Between Application Servers and Database Servers
(3) Between Application Servers and Cache Servers



------> Which Policy to use for Load Balancers?

(1) Use Round Robin:

Adv:

- Equally distributed load among servers
- If 1 server is not responding, LB will move to next available server

(2) Problem with Round Robin?
- Load amount is not taken care of for a server


Better Solution:

Predictive Analysis for Load Balancing/Smart Load Balancers

LB Solution can be periodically queries to know the health and load of DB Servers

Eg:

Netapp,
NginX









(12) Extra: Security and Sharing Permissions


Privacy and Security of Data: Sharing Permissions and Encryption


We will be storing the permissions of each file in our metadata DB to reflect
what files are visible or modified by any user.


Metadata DB
- Will keep track of all the files, chunks, versions and locations in file system.


Schema 

USER_UUID      File_Name         File_Size      Chunks_Size          Version_Timestamp       Storage_Path     Permissions






Final Diagram:
Component Level Diagram [Image]




















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
- User should be able to subscriber to a channel


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



































