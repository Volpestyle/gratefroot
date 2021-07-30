import {
    // import the components that you use in the file here
    AppLayout,
    BreadcrumbGroup,
    HelpPanel,
    Icon
  } from '../aws-ui-components';
export const Home = () => {
    return <AppLayout content={<Content />}/>
}

const Content = () => {
    return <h1>Your Profile</h1>
}