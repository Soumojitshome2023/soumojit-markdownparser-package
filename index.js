class MarkdownParser {
    constructor() {
        this.rules = [
            // Headers
            { pattern: /^(#+)\s(.+)/gm, replacement: (match, level, content) => `<h${level.length}>${content}</h${level.length}>` },
            // Bold and italic
            { pattern: /(\*\*|__)(.*?)\1/g, replacement: '<strong>$2</strong>' },
            { pattern: /(\*|_)(.*?)\1/g, replacement: '<em>$2</em>' },
            // Lists
            { pattern: /^\*\s(.+)/gm, replacement: (match, content) => `<li>${content}</li>` },
            { pattern: /^(\d+)\.\s(.+)/gm, replacement: (match, index, content) => `<li value="${index}">${content}</li>` },
            { pattern: /(<li>.*<\/li>)+/gm, replacement: (match) => `<ul>${match}</ul>` },
            // Links
            { pattern: /\[(.*?)\]\((.*?)\)/g, replacement: '<a href="$2">$1</a>' },
            // Code block
            { pattern: /```([\s\S]*?)```/g, replacement: '<pre><code>$1</code></pre>' },
            // Inline code
            { pattern: /`(.*?)`/g, replacement: '<code>$1</code>' },
            // Blockquote
            { pattern: /^>\s(.+)/gm, replacement: (match, content) => `<blockquote>${content}</blockquote>` },
            // Paragraphs
            { pattern: /(.+)/g, replacement: '<p>$1</p>' }
        ];
    }

    parse(markdown) {
        this.rules.forEach(rule => {
            markdown = markdown.replace(rule.pattern, rule.replacement);
        });
        return markdown;
    }
}

module.exports = MarkdownParser;
