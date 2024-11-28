"use client";
import { ReactElement, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
export default function Canvas() {
  const [canvas, setCanvas] = useState<ReactElement>();
  const { unityProvider } = useUnityContext({
    loaderUrl: "/webgl/Build/webgl.loader.js",
    dataUrl: "/webgl/Build/webgl.data",
    frameworkUrl: "/webgl/Build/webgl.framework.js",
    codeUrl: "/webgl/Build/webgl.wasm",
  });

  useEffect(() => {
    const renderUnityCanvas = (): ReactElement => {
      return (
        <>
          <Unity
            unityProvider={unityProvider}
            style={{ width: "100%", height: "100%" }}
          />
        </>
      );
    };
    const renderedCanvas: ReactElement = renderUnityCanvas();
    setCanvas(renderedCanvas);
  }, []);

  return <>{canvas ? canvas : null}</>;
}
