# Project REST-Rant

### User Stories & Wireframes

As a standard user, I need these features:
- Page navigation
- Add locations
- Delete locations
- Leave review
  - Write comment
  - Give rating
  - Add images
  - Leave a username or id, or remain anonymous

In order to: 
- Edit comments & reviews
- Mark whether the comment is a rant or not
- Track the comments and reviews

## Languages and Tools

```
Express | Node.Js
CSS
React | JSX
Dependencies - express-react
```

### Routes

| Method | Path                     | Purpose                                                                       |
| ------ | ------------------------ | ----------------------------------------------------------------------------- |
| GET    | /                        | The Homes Page                                                                |
| GET    | /places                  | Index page listing all places                                                 |
| GET    | /places/new              | New from for a place                                                          |
| POST   | /places                  | Create a new place                                                            |
| GET    | /places/:id              | Show one place in detail(Associated rants, new rant form, delete rant button) |
| GET    | /places/:id/edit         | Edit form for a pace                                                          |
| PUT    | /places/:id              | Make changes to existing place                                                |
| DELETE | /places/:id              | Delete a place                                                                |
| POST   | /places/:id/rant         | Add rant to a place                                                           |
| DELETE | /places/:id/rant/:rantId | Delete a rant                                                                 |

## Database

### Places

| Field   | Type      |
| ------- | --------- |
| \_id    | Object ID |
| name    | String    |
| city    | String    |
| state   | String    |
| cusines | String    |
| pic     | String    |

**rants**

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| place_id | ref(places) Object_Id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String |

## CSS

### Color Scheme

|        Colors         |
|       --------        |
| Black         #010100 |
| Aqua          #01cc8b |
| Gold          #ffe202 |

REST-Rant is an app where users can review restaurants.