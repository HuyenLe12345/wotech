import "./App.css";
import "./css/custom.css";
import "./css/style.default.css";
import React, { lazy, Suspense } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Footer from "./Share/Footer/Footer";
import Header from "./Share/Header/Header";
import Chat from "./Share/Chat/Chat";

const Home = lazy(() => import("./Home/Home"));
const Detail = lazy(() => import("./Detail/Detail"));
const Cart = lazy(() => import("./Cart/Cart"));
const SignIn = lazy(() => import("./Authentication/SignIn"));
const SignUp = lazy(() => import("./Authentication/SignUp"));
const Checkout = lazy(() => import("./Checkout/Checkout"));
const MainHistory = lazy(() => import("./History/Component/MainHistory"));
const DetailHistory = lazy(() => import("./History/Component/DetailHistory"));

const Shop = lazy(() => import("./Shop/Shop"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />{" "}
            <Route path="/shop" component={Shop} />
            <Route path="/signin" component={SignIn} />{" "}
            <Route path="/signup" component={SignUp} />{" "}
            <Route path="/cart" component={Cart} />{" "}
            <Route path="/detail/:id" component={Detail} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/history/:id" component={DetailHistory} />
            <Route path="/history" component={MainHistory} />
          </Switch>{" "}
        </Suspense>
      </BrowserRouter>

      <Chat />

      <Footer />
    </div>
  );
}

export default App;
