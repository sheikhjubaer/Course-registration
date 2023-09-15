# Add at least 3 Project features
Some of our Project features is given in the following:
- Remaining credit hour is by default 20, which implies, you can not select courses beyond adding up to a limit of 20 credit hours.
- The project is fully dynamic, hence as you are selecting your courses, the name of the courses will be automaticall added to the carts and display on your right at the same time.
- As you keep adding courses into cart on your right, you will be able to see the added cost in USD currency as well.
- Suppose you have selected courses that added up to 18 hours and you have 2 more hours remaining. Now, if you further select a course, lets say a 5 credit course, it will add up to the credit hours in the backend and the results 18 + 5 = 23 is obviosly greater than 20 hours limit. So our site will toast up an alert by saying "Total credit hours cannot exceed 20.".
- Similar kind of things will happend if you try to select a course which you have already selected. So you have to select differnt course to fill the quota of 20 hours credit.
- At the same time, after each course selection, you will notified with a succecessful toast, if you do not surpass the 20 credit hour limits or reselect the same course which you have selected in the same session.
- In order to get the site back to initial state, you have no other options but to reload it.  

# Discuss how you manage the state in your assignment project
We have used a total of 3 states in our assignment and the deatails are given in the following:
- First we have used state to fetch the JSON data that we have created and putted in a file named course.json, and of course we have used useEffect to update the state with all the fetched data.
- Second, we used a state to add a feature of our assignment which is, "Preventing users to repear the same course". If the users select the previously selected course, then we simply ignore the state.
- Thirdly, we used another state in the App.jsx file to update the selected state in order to pass them to carts.
