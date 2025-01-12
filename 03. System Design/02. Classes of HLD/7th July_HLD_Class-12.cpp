Date : 7th July 2024
Mentor: DEVANG SHARMA
Batch: May Batch (System Design) - Tutort Academy

Agenda: System Design - Case Studies

(1) System Design Interviews: A step by step guide: DONE
(2) Designing a URL Shortening service like TinyURL: DONE
(3) Designing Pastebin: DONE

(4) Designing Instagram: DONE
(5) Designing Facebook Feed: DONE
(6) Designing Twitter: DONE

(7) Designing Dropbox/Google Drive/OneDrive: WIP

(8) Designing Yelp/Justdial/Sulekha
(9) Designing Uber/Grab/Ola

(10) Design Netflix/Youtube/Hotstar

Extra:
- Payment System and
- Trading app like Zerodha 

"Please Type 'Hi' in the Chat Box if you have joined and Can See this Screen".
















--------> Case Study-6: Designing Cloud Based File Storage System - Dropbox/Google Drive/One Drive/Apple Drive


- File Hosting(Storing) and Sharing Service
- Cloud Hosting Service:
Users can upload their data/files to cloud from their remote machines
- Data should be synced across ALL Devices


Demo:
drive.google.com





(1) Why Cloud Storage?

- Availability: Upload data from any device
- Reliability: Uploaded data is not deleted
- Scalability: G-Drive: 15 GB, Dropbox: 100 GB
As much as you pay, more storage to buy (Google One: 200 GB)
- Security: Data is End-to-End Secured
- Sharing: Share and Control Access with limited set of people (Can Edit/View etc)




(2) Requirements Clarification

(A) Functional Requirements

- User should be able to view, upload and download their files from any device
- User should be able to share files/folders with other users along with permissions
- Our service should support Automatic Synchronisation between Devices and Users
Eg:
Changing on 1 device, would lead to most updated data/version in all other devices
- System should be able to support storing very large files (In GBs)
- ACID Property Should Support for all file operations - Transactional Operations
- Our System should support - "Offline Editing"
User should be able to add/delete/modify while offline 
and as soon as they come online, their changes are synced to remote servers and other devices



Additional:
- Snapshotting of Data
Users can go back to any version of files


(B) Non-Functional Requirements

- Our Service should be highly available
- Highly RELIABLE
Any uploaded data should not be deleted


- Consistency > Availability

(Availability can take a hit in the interest of Consistency)
(A user is not able to edit for some milliseconds, its fine, )
My Data should always be updated and synced 24*7)

- Strong Consistency
Data should be Synchronised across devices and users.









(3) Some Design Considerations:

(A) We expect HUGE Read and Write Volumes
(B) Read-Heavy or Write-Heavy?

Read-Write: 1:1


(C) IMP:

Internally, files can be stored in small parts (called chunks).
This can provide a lot of benefits - all failed operations shall only be re-tried for smaller parts of file
- If a user fails to upload a file, then only failing chunk will be re-tried


(D) We can reduce the amount of data exchange by transferring only the chunks

(E) Keep a local copy of metadata (filename, size etc) with the utility/client to save the round trips

(F) For small changes, client can intelligently upload ONLY the diffs instead of whole chunks.



Google Doc:

2 Users: A and B

Same version of doc: A and B

A: Some changes - version v1
B: Fetch: Diff of New Changes rather than fetching the entire doc again (version v1)
  	




Turn on Laptop:
OneDrive Icon/Google Drive Icon -> Refreshing


















Real-Life Example:


(1) Case-1: Torrent

Downloading

"Peers"

Seeding 1 out of 10 Peers


2 GB:

1.5 GB/2 GB Completed:

Wifi goes offline

When it is back,

Will it start from 0/2 GB?
	OR
Will it resume from 1.5/2 GB? - ANS


Flow:

Small Chunks of Large Files in Cloud -------- WIFI -------- Your Local Machine

Once connection breaks, it will resume from the last downloaded chunk.




(2) Case-2: Normal Browser Download

Normally Downloading a Movie from Browser

2 GB:

1.5 GB/2 GB Completed:

Wifi goes offline

When it is back,

Will it start from 0/2 GB? - ANS
	OR
Will it resume from 1.5/2 GB? 



Flow:

Large File in Cloud --------- WIFI ------- Your Local Machine

Once Connection Breaks, it will restart from beginning.










(4) Capacity Estimations/ Back of the Envelope Estimation


- Read-Heavy or Write-Heavy?
- Read-Write Ratio:  1:1



(A) Traffic Estimates:

Assumption,
- Total Users: 1 Bn
- Monthly Active Users: 500 Mn
- Daily Active Users: 100 Mn


On an average,
Each User: 3 Devices in Sync




On an average, Each User has 200 files/photos,
Total Files = 200 * 1 Bn = 200 Bn Total Files

Assuming Size of Each File: 100 KB (After Compression)

Total Size= 200 Bn * 100 KB = 20 PB









(5) High Level Design

OneDrive/G-Drive: Folder in your PC ---> Synced to OneDrive/G-Drive


- The user will specify a particular folder as workspace on their device (PC/Laptop/Mobile)
- Any file/folder placed inside this folder will be uploaded to the cloud
- Whenever a file is modified or deleted, it will be reflected the same in cloud



At a High Level, We need to store:

(1) File and their metadata information
(2) metadata information: File Name, File Size, Directory, People with whom the file is shared etc
(3) Some Worker Nodes to help client to upload and download from Cloud Storage
(4) Some mechanism to notify all clients Whenever an update happens, so they can be Synchronised


Image: 
HLD Diagram



Understanding:


(1) Block Server:
Will Work with the Clients (PC/Laptop/Mobile/Utility) to upload/download files from cloud storage.


(2) Metadata Server:
Will keep metadata of files upload in Metadata DB


(3) Synchronisation Server:
Will handle the workflow of notifying all clients about changes for Synchronisation











(6) Component Level Design:


(1) Client

- PC/Laptop/Mobile/Utility



- The Client Application will monitor the workspace folder on the user machine and
sync all the files in it with the Cloud Storage

- Client Application will work with Storage Servers to upload, download and modify the diff to backend 
Cloud Storage

- Client Application will also connect with the Synchronisation Service to handle any metadata uploaded

Eg: Change in File Name, File Size, Version, Modification Date etc



Operations:

- Upload and download Files
- Detect the file changes in workspace folder
- Handle conflict due to offline or concurrent updates



PC:

C:/Documents/OneDrive/Workspace -----------> OneDrive in Cloud
      Client ---> Laptop, Mobile etc		




(A) How do we handle file transfer (upload/download) efficiently?


We break file into small chunks so that we can transfer ONLY those chunks that are modified (diffs)
and NOT the whole File


Google Drive:

Large size: 500 MB -----> Upload -----> 80% Done -----> Cancel -----> Resume/Try Again ------> Resume from 80%



How to divide chunks?


Optimal chunk size can be determined by:
(1) Storage Device we use in Cloud to Optimise the Download/Upload
(2) Network Bandwidth
(3) Average File Size in Strorage etc.





(B) Why should we keep a copy of metadata with the Client?


2 Reasons:
(1) To support offline updates
(2) Reduce Round Trips to update to cloud storage


git:

Changed a file:

git status: modified




File -----> G Drive ------> Upload -----> Block Server ------> Chunks -----> Uploaded to G Drive Server
Copy of metadata


Metadata: File Size, Client information etc


int calculateChunkSize(int size, int bandwidth, String Device Tupe)
{
	if (size/badnwidth == )
		return _;
	else
		return _;
}







(C) How can Clients efficiently listen to changes happening with Server/Other Clients - Synchronisation?

Eg: Changed something in Mobile, Needs to be Synchronised with Laptop and PC




Ways:

(1) Short Polling

Each Client will regularly make a call to Cloud Storage to check for any updates.

Eg:
- Change made on Google Sheets from Mobile
- Laptop/PC keeps short polling to Cloud Storage after every 30 sec or so


Disadvantage:
- Wasting Resources (High Server Load)
- Empty Response Most of The Time




(2) Long Polling

Each Client will make a connection to Cloud Storage to check for any updates.
The Cloud Storage Server does not need to respond immediately.
Keep the connection open and update the response Whenever there is any update.



Eg:
- Change made on Google Sheets from Mobile
- Laptop/PC keeps long polling to Cloud Storage
- Server responds Whenever there is an update






Eg:

OneDrive/G-Drive Client Application -----> Icon -----> Refreshing

All 4 Major Categories happens in the Client Application.


Details of Client:


We can divide our Client Application into 4 Major Categories:

(1) Internal Metadata DB:
- Will keep track of all the files, chunks, versions and locations in file system



(2) Chunker
- Will split files to smaller pieces called Chunks (UPLOAD)
- Also be responsible for reconstructing a file from its chunks (DOWNLOAD)
- Our Chunker Algorithm will detect the parts of the files that have been modified by the user
and transfer only those changed parts (DIFFS) to cloud Storage (UPLOAD)
- This will save Bandwidth and Synchronisation Time


(3) Watcher
- Will Monitor the local workspace folders and notify the indexer of any action performed by user
- Watcher also check for changes on other client by Synchronisation Service




(4) Indexer
- Will process the events received from Watcher
- Update the Internal Metadata Database about the chunks of modified files
- Once the Chunks are successfully uploaded/downloaded to Cloud Storage,
Indexer will communicate to Synchronisation Service to update all Devices.


3 Devices:
A, B, C


Remote ---------------> Drive ---------> Other Devices (Device: B and C)
(Source of Truth)
Device A


For Drive,
Source of Truth: Remote - Device A


For Other Devices: Device B and C
Source of Truth: Drive






(2) Metadata DB:


- The Metadata Database is responsible for maintaining the versioning
- And metadata about chunks, users, sharing access and workspaces


SQL DB vs NO SQL DB?


Synchronisation Service ------> Metadata DB


My Synchronisation Service needs ACID Properties for data.


2 Options:

(1) Metadata DB ----> No SQL
Make changes at Synchronisation Service in Business logic to make it ACID Compliant.

(2) Metadata DB ----> SQL
No changes required at Synchronisation Service because SQl Db are by default ACID Compliant.


Best Choise: Metadata DB -> SQL


Eg: Postgres, Maria DB, MySQL etc.
































