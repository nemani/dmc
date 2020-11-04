import { Grid } from 'grommet';

export const PageWrapper = (props) => (
  <Grid
    fill
    align="start"
    justifyContent="around"
    pad="large"
    gap="small"
    {...props}
  ></Grid>
);
