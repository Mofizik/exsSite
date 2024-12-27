import fs from 'fs';
import path from 'path';
import React from 'react';
import PageContent from './PageContent';

export const dynamicParams = true;

export const generateStaticParams = async () => {
  // Construct the full path to the JSON file
  const filePath = path.join(process.cwd(), 'public', 'source', 'news.json');
  
  // Read the file content
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Parse the JSON content
  const news = JSON.parse(fileContent);
  
  // Map the news items to params
  return news.map((item, index) => ({
    newsid: (index + 1).toString(),
    fallback: 'blocking',
    revalidate: 3600
  }));
};

const Page = ({ params }) => {
  return (
    <PageContent params={params} />
  );
};
export const revalidate = 3600;
export default Page;
