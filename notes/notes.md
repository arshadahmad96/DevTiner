# Express Notes
## Q.Order of the route matters a lot
A. Yes, the order of routes matters in Express. Express checks routes from top to bottom 
and executes the first matching route. If you define a generic route before 
a more specific one, the generic route may handle the request first.
example:-
app.use("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/hello/2", (req, res) => {
  res.send("Hello from 2");
});

Now, if you visit:

/hello/2

The response will be:

Hello

because app.use("/hello") matches /hello and all of its subpaths, including /hello/2.

# So the key takeaway is:

Express processes routes in the order they are defined.
Order is especially important when using app.use() or parameterized/wildcard routes, because they can match multiple paths.

## Q2. difference between get post delete pactch call and use method 
