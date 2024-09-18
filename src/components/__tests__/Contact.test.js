import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//we can use test or it keyword to write test fnction

describe("Contact us test cases",()=> {
test("should load contact us component",() => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});


it("should load button inside contact component",() => {
    render(<Contact/>);
  //querying
    const button = screen.getByRole("button");
    //assertion
    expect(button).toBeInTheDocument();
});

});