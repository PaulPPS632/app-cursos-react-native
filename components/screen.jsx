import { useEffect, useState } from "react";
import { fetchScreens_ByPostId } from "../PostService";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeHighlighter from "react-native-code-highlighter";
import Markdown from "react-native-markdown-display";

export function Screen({ data }) {
  const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text
Inline \`code\`

  Indented code

      // Some comments
      line 1 of code
      line 2 of code
      line 3 of code


  Block code "fences"

  \`\`\`
  Sample text here...
  \`\`\`

  Syntax highlighting

  \`\`\` js
  var foo = function (bar) {
    return bar++;
  };
  var foo = function (bar) {
    return bar++;
  };
  const nuevo ={
  dato: "nuevo",
  segudo: "algo"
  }
  console.log(foo(5));
  \`\`\`
`;
  const renderRules = {
    // Otras reglas de renderizado

    code_inline: (node, children, parent, styles, inheritedStyles = {}) => {
      return (
        <CodeHighlighter
          key={node.key}
          hljsStyle={atomOneDarkReasonable}
          containerStyle={styles.codeContainer}
          textStyle={styles.text}
          language="javascript" // Puedes ajustar el lenguaje según sea necesario
        >
          {node.content}
        </CodeHighlighter>
      );
    },

    code_block: (node, children, parent, styles, inheritedStyles = {}) => {
      //indeted code
      let { content } = node;

      if (
        typeof node.content === "string" &&
        node.content.charAt(node.content.length - 1) === "\n"
      ) {
        content = node.content.substring(0, node.content.length - 1);
      }
      return (
        <CodeHighlighter
          key={node.key}
          hljsStyle={atomOneDarkReasonable}
          containerStyle={{
            width: "100%",
            padding: 10,
            alignItems: "center",
            margin: 10,
            marginRight:10
          }}
          textStyle={styles.text}
          language={node.language || "javascript"} // Asegúrate de que el lenguaje esté disponible en el contenido
        >
          {content}
        </CodeHighlighter>
      );
    },

    blockquote: (node, children, parent, styles) => (
      <View key={node.key} style={styles.blockquote}>
        {children}
      </View>
    ),

    fence: (node, children, parent, styles, inheritedStyles = {}) => {
      let { content } = node;

      if (
        typeof node.content === "string" &&
        node.content.charAt(node.content.length - 1) === "\n"
      ) {
        content = node.content.substring(0, node.content.length - 1);
      }
      content += "das";
      return (
        <View key={node.key} style={{justifyContent:'center', backgroundColor:'#1c2b38'}}>
          <CodeHighlighter
            key={node.key}
            hljsStyle={atomOneDarkReasonable}
            containerStyle={{
              width: "100%",
              padding: 10,
              alignItems: "center",
              margin: 10
            }}
            textStyle={styles.text}
            language={node.language || "javascript"} // Asegúrate de que el lenguaje esté disponible en el contenido
            
          >
            {content}
          </CodeHighlighter>
        </View>
      );
    },

    // Otras reglas de renderizado
  };
  return (
    <View className="bg-gray-800 h-full w-full">
      <ScrollView>
        {data[0].ScreenPosts.map((screenPost) => (
          <View className="h-full w-full" key={screenPost.id}>
            <Text className="text-white font-bold">{screenPost.title}</Text>
            <View className="">
              <Markdown className="h-full bg-gray-800" rules={renderRules}>
                {copy}
              </Markdown>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
