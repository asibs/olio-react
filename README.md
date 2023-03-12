# Olio React

## Installing & running the app locally

These instructions assume you are running in a Unix environment (OSX / Linux) and are familiar with using a command line terminal in your operating system.

### Pre-requisites

You will need [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed in order to checkout the code from [GitHub](https://github.com/).

You will need [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed in order to run this application.

Installation of these tools will depend on your operating system, and you may already have them installed.

### Instructions

1. Clone the repository: `git clone git@github.com:asibs/olio-react.git`
2. Change directory into the application: `cd olio-react`
3. Install the application dependencies: `npm install`
4. Run the application: `npm start`
5. Your default browser _should_ open automatically. If not, visit http://localhost/3000
6. Stop the application from running by returning to your terminal and pressing CTRL+C
7. You can run the tests for the application with: `npm test`

## Features

The site allows users to find items which have been offered by other users.

### List View

There is a default list view, which shows items images & titles, along with the name of the user who listed the item & the users rating, the distance from the current user (always 0 with the test data) and the number of times the item has been viewed.

The user can also click 'View' to see additional details about the item, and then request the item, or close the expanded item details (which will hide the item). The "Request this item" button does not do anything useful - it flags to the user that they will be able to request items soon.

### Map View

There is a very basic map view (somewhat buggy) which allows users to find the items on the map. Note, the map does not seem to fully render on-load, but does seem to render correctly if/when you resize your browser. Clicking the map icons creates a popup showing the item.

### Responsive Design

The application has some basic responsive design, so should function across a range of device sizes, ranging from mobile up to desktops.

## Issues / Improvements

There are various areas which could be improved given more time.

- Images of items are rendered in different sizes depending upon whether they are portrait or landscape. This could be improved by cropping the images to the same size regardless of orientation.
- Currently, we only record an item as 'viewed' when a user clicks to 'close' the expanded item card. In reality, we would likely want to record the view immediately - the listings data we are rendering includes total views, so we in reality we would probably need to call a backend API to record the view (as well as making any changes to how the item should be rendered on the frontend). In this example, I have chosen to simply hide previously viewed items, meaning the simplest implementation was to trigger this on closing the item view.
- Items do not currently have their own page - we simply expand the card on the list view to add some more details. This also means links to individual items cannot be shared, which may be an important social function for our application. Item specific pages and URLs could be added with tools like [React Router](https://reactrouter.com/en/main) or by using [Next.js](https://nextjs.org/) on top of React.
- The list of viewed items is lost if the page is ever refreshed. This could be improved by using [Redux](https://redux.js.org/), but this would still mean a users views would be lost if they logged on with different devices. In reality, user views are likely to be pushed to the backend to be stored in a database, which would then mean a users viewed items could be kept consistent across devices - although this would also require an authentication layer so we know who each user is!
- As mentioned, the map view is buggy. I had used [Leaflet.js](https://leafletjs.com/) for simple interactive maps before, so decided to use this, and saw there was a [react-leaflet](https://react-leaflet.js.org/) node package, so assumed this would integrate well, but it seems to have some rendering issues - potentially because I am also using bootstrap, and the styles for these two may be interfering. With more time, I would investigate these issues more, and potentially investigate any alternatives to Leaflet.js which may be popular in the React ecosystem.
- Also on the map view, when clicking on an items map marker, I simply re-used the `ListingCard` component from the list view for speed. This is also somewhat buggy - clicking on an item brings up the card with the `View` button - clicking the `View` button to expand the card hides it (I believe Leaflet.js is interpreting the click as clicking off the popup, which means Leaflet.js closes the popup). If the user clicks on the map icon again, the card will re-appear in it's expanded state. Clicking 'Close' will then hide the item from the map.
- There are multiple items with identical co-ordinates (likely because the same person has multiple listings). It's currently only possible to see the 'topmost' item at a given co-ordinate unless you 'Close' the topmost item to reveal the next marker. We should ideally show some indicator of how many items are in a location, and if there are more than one, show the multiple items in a compact view when the marker is clicked. Then if/when a user clicks on a specific item, we could take them to the specific page for that item (assuming we have already added item-specific pages).
- The overall UI/UX is basic. I have just utilised [Bootstrap](https://getbootstrap.com/) for this as a relatively simple & clean UI.
- In the type definitions for the API data, I have only included those fields which I thought I was definitely / potentially going to use, and left out fields which either looked like duplicates (eg. `images` looked like a duplicate of `photos` - at least for the test data), or which I didn't believe was necessary / important for the requirements of the application at this time.

## Technology Choices

### Framework

I chose to use [React](https://reactjs.org/) using the [Create React App Template](https://reactjs.org/docs/create-a-new-react-app.html), as it seemed like the task could be implemented relatively simply as a Single Page App.

Had we needed more functionality, such as the individual pages for items mentioned above, or we needed to make API calls with API keys which should not be exposed to end-users, I probably would have used [Next.js](https://nextjs.org/) and made use of it's [page routing](https://nextjs.org/docs/basic-features/pages) and [API routes](https://nextjs.org/docs/api-routes/introduction).

I also chose to use [Typescript](https://www.typescriptlang.org/) for static type checking.

### API Calls / Fetching Data

I chose [Axios](https://axios-http.com/) for this - primarily because I had used it before in other projects, and it is a commonly used & well-supported package.

### UI / UX

I chose [Bootstrap](https://getbootstrap.com/) with [React Bootstrap](https://react-bootstrap.github.io/) to quickly add some basic & functional styling to the application.

I used [Bootstrap Icons](https://icons.getbootstrap.com/) and [React Bootstrap Icons](https://github.com/ismamz/react-bootstrap-icons) for adding some basic icons to the application.

### Map

I used [Leaflet.js](https://leafletjs.com/) and [React Leaflet](https://react-leaflet.js.org/) for adding an interactive map, primarily because I had used Leaflet.js before (although not React Leaflet). However, as noted above, this seems to be buggy - I would investigate further, but might also explore using Leaflet.js without React Leaflet, or explore other options entirely.

### Test Data Setup

I used [fishery](https://github.com/thoughtbot/fishery), which I hadn't come across before, but wanted to create `Listing` objects (and the objects within `Listing`s) in tests without having to specify every field every time. I had used the Ruby Gem [FactoryBot](https://github.com/thoughtbot/factory_bot) before, so searched for any similar javascript packages, and found fishery.
