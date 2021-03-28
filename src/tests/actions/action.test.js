import { reducer } from '../../components/MainApp'


test('inside action test file', () => {
    const action ={type: "add-todo", payload: "123"};
    const value = reducer({todo: []}, action)
    expect(value).toEqual({"todo": [{"data":"123","complete":false}]});
});
  