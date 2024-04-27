# Markdown Parser and Renderer

Markdown Parser and Renderer is an npm package that allows you to parse Markdown content into HTML format.

## Installation

To install the Markdown Parser and Renderer package, run the following command in your project directory:

```
npm install soumojit-markdownparser
```

## Usage
To use the Markdown Parser and Renderer in your project, follow these steps:

1. Import the MarkdownParser module into your script:

```
import MarkdownParser from 'soumojit-markdownparser';

```

2. Create an instance of the MarkdownParser class:

```
const parser = new MarkdownParser();

```
### page.js : 

```
// NextJs
// pages.js
import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const HomePage = () => {
    // Please ensure that your README file is located in the public folder of your project. 
    const markdownFileAddress = '/fileName.md';

    return (
        <div>
            <h1>Markdown Renderer Example</h1>
            <MarkdownRenderer fileAddress={markdownFileAddress} />
        </div>
    );
};

export default HomePage;

```


### MarkdownRenderer.js : 

```
// NextJs Code
// MarkdownRenderer.js
"use client"
import React, { useEffect, useState } from 'react';
import MarkdownParser from 'soumojit-markdownparser';

const markdownParser = new MarkdownParser();

const MarkdownRenderer = ({ fileAddress }) => {
    const [markdownContent, setMarkdownContent] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarkdownContent = async () => {
            try {
                const response = await fetch(fileAddress);
                if (!response.ok) {
                    throw new Error('Failed to fetch Markdown content');
                }
                const content = await response.text();
                setMarkdownContent(content);
            } catch (error) {
                console.error('Error fetching Markdown content:', error);
                setError(error);
            }
        };
        fetchMarkdownContent();
    }, [fileAddress]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const html = markdownParser.parse(markdownContent); // Parse Markdown content
    return <div dangerouslySetInnerHTML={{ __html: html }} />; // Render HTML
};

export default MarkdownRenderer;

```




## Contributing
Contributions to MarkdownParser are welcome! To contribute, follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine:

```
git clone https://github.com/Soumojitshome2023/soumojit-markdownparser-package
```
3. Make your changes and test them.
4. Commit your changes and push them to your forked repository.
5. Open a pull request on GitHub to merge your changes into the main repository.



---