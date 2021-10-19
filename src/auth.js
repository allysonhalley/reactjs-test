// export const isAuthenticated = () => true;

export const isAuthenticated = (props) => {
    var user = props.user;
    var password = props.password;
    return (isEmpty(user) && isEmpty(password))
};

const isEmpty = (param) => (
  (! Object.keys(param).length === 0)
)
