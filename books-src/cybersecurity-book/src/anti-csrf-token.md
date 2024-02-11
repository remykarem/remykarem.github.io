# Anti-CSRF token

Include an additional token in each request. This token is tied to the user's session (and therefore cookies); and only the server knows this. 

The token can be embedded in the page's form, hidden field, or added to the URL (which are hard to access if you're not from within the page).
