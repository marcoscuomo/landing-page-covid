[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Website developed with Next and Styled-components 

![alt text](https://lh3.googleusercontent.com/g72l9Qzg2OTWGgSrXMF_RACetp_57mS9AApwGIneKK7-xfTOi4fUse5Cs2waEAfoisOk5iet0cV3tEiwQDhY8oof1lDTMqBGr9OuXAQbD72wn86Xb4_36psGcwXGKnMtlgbfaZJWxwvx_49x_kSShmoIRDJA-JADBBu93ziT8-sVSo6vXXiNGjHQxsMvpNbna2HQb2c-yTUqxwKdh23139Zl12AQo6po5lWE6mJavlFgSq1XxP4-yeIv-8Qa0vLtiAPzWIcYv95yQaKU_tNCVgyIjkszRcDT8cpzw0sqRgzuzebxKDACDPhWhtD9CQwgtunlmjMI6zBrk5S8hPgPChH2Jrd3VZ7-O6Qr59twzSV1Hf5iy0VKJ29-2XaVdBxpVXXniRWexQds-GcreGrbEY_EvNxomlQf3JOZPCW9iC6eqztEt_9mJXePyEjT4UQjdg0TaIjDCwnOSwCOnv4Vb_Zv7p6dZwoP9eJ5Hp9K8-EaUUcKcCN0CzZ141F75g2HdpedoedSilW6A5mm5VfFkO7DBRRnp6ChTsqZsQUHPketog1Z1_56wMsGRkNVgJNSRJmKFRZmZw8GnkY-gIEjoOZ9BoraYMZR7rSCqUUhDWEhIwF4yhLi4F6KydahQshpYf7QpVHU9SZiAq2ZnN9-Pb2KbbC_hI2QEQrdLszNaIDvH7DDZNw-fOO52FTlhblFUXwNd5SkQyFmXKQtzccUgoPF=w1415-h661-no?authuser=0)

This example features how you use a different styling solution than [styled-jsx](https://github.com/vercel/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-styled-components)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
