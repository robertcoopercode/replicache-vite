import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Link
} from "react-router-dom";
import Todo from "routes/todo/todo";
import RootLayout from "routes/layout"
import {Playground} from "routes/playground";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route path="/todo/*" element={<Todo/>}/>
        <Route path="/playground" element={<Playground />}/>
        <Route path="*" element={null} />
    </Route>
));
