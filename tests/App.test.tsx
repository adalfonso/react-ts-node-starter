import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";
import { App } from "@client/components/App";

it("App is rendered", () => {
  const appElement: any = TestUtils.renderIntoDocument(<App />);
  const appNode = ReactDOM.findDOMNode(appElement);

  expect(appNode.textContent).toEqual("Hello World!");
});
