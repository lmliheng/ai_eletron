<script setup>
import { onMounted } from 'vue'
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'prismjs/themes/prism.css';



const code = `\`\`\`javascript
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        const context = this;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}
\`\`\`
`;

onMounted(() => {
    // 基础配置
    const editor = new Editor({
        el: document.querySelector('#editor-container'),
        height: '80%',  
        plugins: [codeSyntaxHighlight],
        initialEditType: 'wysiwyg',
        previewStyle: 'vertical',
        initialValue: code,
        codeBlockLanguages: [
    'javascript',
    'typescript',
    'jsx',
    'tsx',
    'html',
    'css',
    'json',
    'bash',
    'java',
    'python',
    'go',
  ],
    });

});

</script>

<template>
    <div id="editor-container" style="width: 100%; height: 80%;"></div>
</template>