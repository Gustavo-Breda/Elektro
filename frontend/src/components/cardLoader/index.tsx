import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const ShoppingLoader = (props: IContentLoaderProps) => {
  return (
    <ContentLoader
    speed={2}
    width={168}
    height={128}
    viewBox="0 0 168 128"
    backgroundColor="#f3e7e7"
    foregroundColor="#c7cdea"
    {...props}>
        
    <rect x="3.23136" y="14" rx="0" ry="0" width="2.2305696" height="98.4"/> 
    <rect x="3.76992" y="13.6" rx="0" ry="0" width="151.5981" height="2.4"/> 
    <rect x="152.02048" y="13.6" rx="0" ry="0" width="2.2305696" height="98.4"/> 
    <rect x="3.23136" y="110.4" rx="0" ry="0" width="151.5981" height="2.4"/> 
    <rect x="13.34066" y="26.8" rx="0" ry="0" width="56.08018" height="54.8"/> 
    <rect x="13.74504" y="84.4" rx="0" ry="0" width="17.4816" height="14.4"/> 
    <rect x="32.3455" y="84.4" rx="0" ry="0" width="17.4816" height="14.4"/> 
    <rect x="51.37" y="84.4" rx="0" ry="0" width="17.4816" height="14.4"/> 
    <circle cx="86.95" cy="38.4" r="11.8" /> 
    <rect x="103.6185" y="31.6" rx="0" ry="0" width="46.0235" height="3.6"/> 
    <rect x="103.8602" y="39.6" rx="0" ry="0" width="46.0314" height="3.2"/> 
    <rect x="80.4466" y="56" rx="0" ry="0" width="68.8103" height="4.4"/> 
    <rect x="80.4466" y="67.8" rx="0" ry="0" width="68.8103" height="4.4"/> 
    <rect x="80.935" y="82.8" rx="0" ry="0" width="25.6583" height="11.2"/> 
    <rect x="110.7388" y="83.2" rx="0" ry="0" width="26.3833" height="10.8"/> 
    <circle cx="144.483" cy="88.4" r="5.52"/>
    </ContentLoader>
  )
}

ShoppingLoader.metadata = {
  name: 'Nitish sharma',
  github: 'Nitz2611',
  description: 'A loading skeleton for shopping website',
  filename:'ShoppingLoader' 
}

export default ShoppingLoader