import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import appStore from "../../constant/appStore";
import "@testing-library/jest-dom";

it("should load header component with a login button",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
             <Header/>
          </Provider>
        </BrowserRouter>
);

 const LoginButton = screen.getByRole("button", {name:"Login"});

 expect(LoginButton).toBeInTheDocument();
});



it("should load header component with a cart item",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
             <Header/>
          </Provider>
        </BrowserRouter>
);

 const cartItem = screen.getByText("Cart(1 items)");

 expect(cartItem).toBeInTheDocument();
});


it("should load header component with a cart",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
             <Header/>
          </Provider>
        </BrowserRouter>
);

 const cartItem = screen.getByText(/Cart/);

 expect(cartItem).toBeInTheDocument();
});


it("should change login button to logout ",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
             <Header/>
          </Provider>
        </BrowserRouter>
);

 const LoginButton = screen.getByRole("button",{name:"Login"});
 fireEvent.click(LoginButton);

 const LogoutButton = screen.getByRole("button",{name:"Logout"});

 expect(LogoutButton).toBeInTheDocument();
});