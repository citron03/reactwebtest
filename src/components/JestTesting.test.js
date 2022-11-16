import renderer from "react-test-renderer";
import { plus } from "./JestTesting";

test("plus function", () => {
  expect(plus(1, 2)).toBe(3);
});

it("click button", () => {
  const component = renderer.create(<button>button</button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onClick = plus(-1, -2);
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
