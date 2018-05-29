import {mapStateToProps} from "./mapStateToProps";
import * as React from "react";
import {shallowWithStore} from 'enzyme-redux';
import {createMockStore} from 'redux-test-utils';
import {EnzymePropSelector} from "enzyme";
import {mapDispatchToProps} from "./mapDispatchToProps";

describe('mapDispatchToProps decorator', () => {
    it('should map dispatch actions to props as expected using decorator', () => {
        const action = { type: 'type' };

        interface Props { test?: any; }

        @mapDispatchToProps({ action: () => action })
        class Custom extends React.Component<Props> {
            render(): React.ReactNode {
                return <div>{ this.props.test } </div>
            }
        }

        const store = createMockStore({});
        const component = shallowWithStore(<Custom />, store);
        component.props().action();
        expect(store.isActionDispatched(action)).toBe(true);
    });
});

