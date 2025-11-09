import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import {createTrailbaseProvider} from "/workspaces/A22/my-admin/ra-trailbase.js";
import { MovieCreate, MovieEdit, MovieList, MovieShow } from "./Movie";
import { ReviewCreate, ReviewEdit, ReviewList, ReviewShow } from "./Review";
import { UserCreate, UserEdit, UserList, UserShow } from "./Users";

const TRAILBASE_URL = "https://sturdy-space-halibut-wr9qgqgg6r5ph5745-4000.app.github.dev/";
const {dataProvider} = await createTrailbaseProvider(TRAILBASE_URL)

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="Movie" list={MovieList} edit={MovieEdit} show={MovieShow} create={MovieCreate}/>
    <Resource name="Review" list={ReviewList} edit={ReviewEdit} show={ReviewShow} create={ReviewCreate}/>
    <Resource name="Users" list={UserList} edit={UserEdit} show={UserShow} create={UserCreate}/>
  </Admin>
);

export default App;