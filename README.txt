How to start the project:
1 Download the compressed BlogPost App folder and extract it.
2 Open the folder in vs scode or in terminal
3 type npm install to install all node dependencies
4 type npm start in terminal
5 copy the port and on brower type localhost:<the port that is active/3000>
6 any error that might occur can be found on the terminal only.


Working :
 
BlogPost App

it is a basic bloging web app build using Nodejs and express js 
data is stored in MongoDb Atlas cluster using Mongoose

Landing page:
A list of all the blogs can be seen with the category they are associated to

Creat a blog:
On clicking create new button
create new page will come with 3 fields
  title: greater than 3 letter and less than 50 letters
  category: greater than 3 letters and less than 15 letters
  content: greater than 255 letters

Read a blog :
on click the card of the blog from list of blogs user will be navigated to blog content page.
user can read the content of the blog.
there is also options of editing and deleting the blog
by clicking back to list button user can navigate back to the list page


edit a blog :
on clicking edit button on user will navigated to edit page
** for edit there is similar validations as create


Routes:
<>=localhost:<the available port or 3000>
Show the list of blog post:=     <>'/#blogs'
View details of the blog post.:= <>'/blogs/:id'
Add a new blog post.:=           <>'/blogs/add'
Edit the blog post.:=            <>'/blogs/edit/:id'
Delete the blog post:=           <>'/delete/:id'

