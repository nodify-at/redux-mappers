## redux-mappers
A simple library provides decorators to map state to props and map dispatch actions to props.

### Usage
```javascript
@mapStateToProps(state => ({
    id: state.data.id // whatever you want to map from state to props
})
@mapDispatchToProps( { dataAction: someAction } )
export class Container extends React.Component {
...
}
```

### Licence
MIT