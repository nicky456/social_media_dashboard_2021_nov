# Social Media Dashboard

## Story

You've always wondered how awesome would it be to work as an influencer.

But it's not that easy as you think.
You need to know all the trends and you need to follow which platforms are the most popular according to your followers.

You are a frontend free-lancer who got an offer from an influencer named Nathan Follow-Me.
Nathan wants a website where he can see all the information that he needs to know about the platforms he uses.

You asked your friend to make the backend part of the job and you undertook the frontend part.
You got a sample JSON format from your friend about the objects that you need to present in the page.

## What are you going to learn?

- Creating reusable React components

## Tasks

1. Recreate the design seen in `desktop-design.jpg` with the `data` objects' data from `sample-data.js`.
    - The page has a similar look to this design: ![Social Media Dashboard](https://learn.code.cool/media/frontend/social-media-dashboard.jpg)
    - If the data changes in `sample-data.js`, the output changes also

## General requirements

- The cards under the title `Social Media Dashboard` are the same components with different props
- The cards under the title `Overview - Today` are the same components with different props

## Hints

- Start your project by typing `npx create-react-app social-media-dashboard` into the terminal.
- Analyse the design and search for similar parts of the page with the same structure.
  They can be one component with different inputs.
- You can not import any files above the `src` folder into any React components.
- If you don't want to type everytime `props.creative-property-name` when you use your property in a component,
 you can destructure the props object an use its properties like: `const Component = ({name}) => <div>{name}</div>`.

## Background materials

- <i class="far fa-exclamation"></i> [React docs about the components](https://reactjs.org/docs/components-and-props.html)
