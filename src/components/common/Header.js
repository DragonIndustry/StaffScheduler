const Header = () => (
    <div>
     <Toolbar style={styleToolbar}>
      <Grid container direction="row" justify="space-around" align="center">
       <Grid item xs={12} style={{ textAlign: 'right' }}>
        <Link href="/login">
         <a style={{ margin: '0px 20px 0px auto' }}>Log in</a>
        </Link>
       </Grid>
      </Grid>
     </Toolbar>
    </div>
   )