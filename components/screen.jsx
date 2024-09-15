import { useEffect, useState } from "react";
import { fetchScreens_ByPostId } from "../PostService";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeHighlighter from "react-native-code-highlighter";
import Markdown from "react-native-markdown-display";
import { Link } from "expo-router";
import { styled } from "nativewind";

export function Screen({ data }) {
  const copy = `# Python

**este es un post de python aqui aprenderas de todo**

bueno en esta primera parte aprenderas de los tipos de datos en python uno de ellos es number, tuplas, pilas, diccionarios, etc

Tipo de Dato numerico \`number = 1\`

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
  console.log(foo(5));
  console.log(foo(5));
  console.log(foo(5));
  const nuevo ={
  dato: "nuevo",
  segudo: "algo",
  dato: "nuevo",
  segudo: "algo",
  dato: "nuevo",
  segudo: "algo",
  dato: "nuevo",
  segudo: "algo",
  dato: "nuevo",
  segudo: "algo",
  dato: "nuevo",
  segudo: "algo",
  dato: "nuevo",
  segudo: [
  {
    dato:"nuevooooo"
  },
  {
    dato:"nuevooooo"
  },
  {
    dato:"nuevooooo"
  },
  ]
  }
  \`\`\`
`;
  const renderRules = {
    // Otras reglas de renderizado

    code_inline: (node, children, parent, styles, inheritedStyles = {}) => {
      return (
        <View key={node.key} style={{justifyContent:'center', backgroundColor:'#1c2b38', margin:20}}>
        <CodeHighlighter
          key={node.key}
          hljsStyle={atomOneDarkReasonable}
          containerStyle={styles.codeContainer}
          textStyle={styles.text}
          language="javascript" // Puedes ajustar el lenguaje según sea necesario
        >
          {node.content}
        </CodeHighlighter>
        </View>
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
        <View key={node.key} style={{justifyContent:'center', backgroundColor:'#1c2b38', margin:20}}>
        <CodeHighlighter
          key={node.key}
          hljsStyle={atomOneDarkReasonable}
          containerStyle={{
            width: "100%",
            padding: 10,
          }}
          language={node.language || "javascript"} // Asegúrate de que el lenguaje esté disponible en el contenido
        >
          {content}
        </CodeHighlighter>
        </View>
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
      return (
        <View key={node.key} style={{justifyContent:'center', backgroundColor:'#1c2b38', margin:20, borderRadius:8}}>
          <CodeHighlighter
            key={node.key}
            hljsStyle={atomOneDarkReasonable}
            containerStyle={{
              width: "100%",
              padding: 15,
              alignItems: "center",
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
  const StyledPressable = styled(Pressable);
  console.log(data[0].sucesor);
  return (
    <View className="bg-gray-800 h-full w-full">
      <ScrollView>
        {data[0].ScreenPosts.map((screenPost) => (
          <View className="h-full w-full" key={screenPost.id}>
            <View className="m-3">
              <Markdown style={{text:{color:'#e8e8e8'}}} rules={renderRules}>
                {copy}
              </Markdown>
              <View>
                <Link  href={`/${screenPost.predecesor}`} asChild>
                  <StyledPressable>
                    <Text>das</Text>
                  </StyledPressable>
                </Link>
                <Link  href={`/${screenPost.sucesor}`} asChild>
                  <StyledPressable>
                    <Text>das</Text>
                  </StyledPressable>
                </Link>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
