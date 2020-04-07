export default function(context) {
    if (context.vyndueAuth === true) {
        console.log('asdasd')
            // check the root there is query inside url
            // if yes, get the query and redirect.
        if (context.route.query && context.route.redirectUrl) {
            return context.redirect(context.route.query.redirectUrl);
        }
    }
}