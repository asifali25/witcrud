import "./App.css";
import Container from "./component/container/Container";
import Entries from "./component/entries/Entries";
import EditForm from "./component/form/EditForm";
import Form from "./component/form/Form";
import Header from "./component/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Entries></Entries>
                <Form></Form>
              </Container>
            }
          ></Route>
          <Route path="/editclient/:id" element={<EditForm></EditForm>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
