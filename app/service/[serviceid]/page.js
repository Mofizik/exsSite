import React from 'react'
import fs from 'fs';
import path from 'path';
import PageContent from './PageContent'
export const generateStaticParams = async () => {
    const filePath = path.join(process.cwd(), 'public', 'source', 'services.json');
  
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse the JSON content
    const services = JSON.parse(fileContent);
    
    // Map the news items to params
    return services.map((item, index) => ({
      serviceid: (index + 1).toString(),
      fallback: 'blocking',
      revalidate: 3600
    }));
  }
const page = ( {params} ) => {
  return (
      <PageContent params={params} />
  )
}
export const revalidate = 3600;
export default page;