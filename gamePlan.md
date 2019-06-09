# Features
1. **Create a post** 
  - Make posts/new route and template(posts-new.handlebars)
  - Add form to posts-new template
  - Make create posts route, check that form data is sending to new route 
  - Add Post model with Mongoose 
  - Confirm posts are saving to database
2. **Show all posts** 
  - Make root route (/) go to posts/index route render a posts-index template 
  - Style template and loop over posts objects
  - Make route to posts/show route (/posts/:id)
  - Style template and display post ojbect
3.  **Make comments on Posts**
  - Make new comment form in posts/show template 
  - Make a create route for comments 
  - Associate comments with posts
  - Display comments
4. **Sign up** 
  - Make /sign-up route
  - POST soute and logic
  - Make sign-up template 
  - Make sign-up form
  - Encrypt user's passwords
  - Create JWT and add cookies
5. **Login**
  - Make login route 
  - Make login template 
  - Make login form
  - POST/ login route and logic
  - Demonstrate that user us logged in
6. **Associate content w/ author**
  - Check authentication
  - Make req.user and currentUser objects 
  - Add author attribute to comments and posts
  - Saver user as author or posts
  - Display author's usrname on posts and comments
7. **Search** 
8. **Create Subreddit** 
  - Add subreddit attribute to post resource 
  - Navigate to view all posts of same subreddit
9. **Create post on subreddit** 
10. **Show all subreddits** 
11. **Vote post up or down**
  - Make a Vote form 
  - Add jQuery AJAX scripts 
  - Add new attributes to Post model 
  - Update DOM with response