// _ Pantalla de Contenido de cursos:

import { View, ScrollView, Pressable } from "react-native";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeHighlighter from "react-native-code-highlighter";
import Markdown from "react-native-markdown-display";
import { Link } from "expo-router";
import { styled } from "nativewind";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Screen({ data }) {
  const renderRules = {
    // Otras reglas de renderizado

    code_inline: (node, children, parent, styles, inheritedStyles = {}) => {
      return (
        <View
          key={node.key}
          style={{
            justifyContent: "center",
            backgroundColor: "#1c2b38",
            margin: 20,
          }}
        >
          <CodeHighlighter
            key={node.key}
            hljsStyle={atomOneDarkReasonable}
            containerStyle={styles.codeContainer}
            textStyle={styles.text}
            language={node.sourceInfo || "python"} // Puedes ajustar el lenguaje según sea necesario
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
        <View
          key={node.key}
          style={{
            justifyContent: "center",
            backgroundColor: "#1c2b38",
            margin: 20,
          }}
        >
          <CodeHighlighter
            key={node.key}
            hljsStyle={atomOneDarkReasonable}
            containerStyle={{
              width: "100%",
              padding: 10,
            }}
            language={node.sourceInfo || "python"} // Asegúrate de que el lenguaje esté disponible en el contenido
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
      console.log(node);

      if (
        typeof node.content === "string" &&
        node.content.charAt(node.content.length - 1) === "\n"
      ) {
        content = node.content.substring(0, node.content.length - 1);
      }
      return (
        <View
          key={node.key}
          style={{
            justifyContent: "center",
            backgroundColor: "#1c2b38",
            margin: 20,
            borderRadius: 8,
          }}
        >
          <CodeHighlighter
            key={node.key}
            hljsStyle={atomOneDarkReasonable}
            containerStyle={{
              width: "100%",
              padding: 15,
              alignItems: "center",
            }}
            textStyle={styles.text}
            language={node.sourceInfo || "python"} // Asegúrate de que el lenguaje esté disponible en el contenido
          >
            {content}
          </CodeHighlighter>
        </View>
      );
    },

    // Otras reglas de renderizado
  };
  const StyledPressable = styled(Pressable);
  return (
    <View className="bg-gray-800 h-full w-full">
      <ScrollView>
        <View className="h-full w-full" key={data.id}>
          <View className="m-3">
            <Markdown
              style={{ text: { color: "#e8e8e8" } }}
              rules={renderRules}
            >
              {data.content}
            </Markdown>
            <View className="flex-1 flex-row justify-between mx-4 mt-10">
              <View>
                {data.predecesor !== 0 ? (
                  <Link href={`/${data.predecesor}`} asChild>
                    <StyledPressable className="text-white">
                      <AntDesign name="caretleft" size={24} color="white" />
                    </StyledPressable>
                  </Link>
                ) : (
                  <View>

                  </View>
                )}
              </View>
              <View>
                {data.sucesor != null ? (
                  <Link href={`/${data.sucesor}`} asChild>
                    <StyledPressable className="text-white">
                      <AntDesign name="caretright" size={24} color="white" />
                    </StyledPressable>
                  </Link>
                ) : (
                  <View>

                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// 1. Reolver el tipo de lenguaje para el markdon.