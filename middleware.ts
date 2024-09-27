// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({
//     publicRoutes:["/"]
// });

// export const config={
//     matcher:["/((?!.*|_next)", "/", "/(api|trpc)(.*)"],};


import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes: ["/"]
});

export const config = {
    matcher: [
        "/((?!_next).*)", // Corrected the pattern here
        "/",
        "/(api|trpc)(.*)"
    ]
};
