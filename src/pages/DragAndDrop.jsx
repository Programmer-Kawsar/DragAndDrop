import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import pluginCountdown from "grapesjs-component-countdown";
import grapesjsPluginCkeditor from "grapesjs-plugin-ckeditor";
import gjsForms from "grapesjs-plugin-forms";
import "../pages/draganddrop.scss";
import navbar from "grapesjs-navbar";
import pluginTooltip from "grapesjs-tooltip";
import customCodePlugin from "grapesjs-custom-code";
import typed from "grapesjs-typed";
import classes from "@silexlabs/grapesjs-ui-suggest-classes";
const DragAndDrop = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [
        gjsPresetWebpage,
        pluginCountdown,
        gjsForms,
        navbar,
        pluginTooltip,
        customCodePlugin,
        typed,
        classes,
      ],
      pluginsOpts: {
        gjsPresetWebpage: {},
        [pluginCountdown]: {},
        [grapesjsPluginCkeditor]: {},
        [gjsForms]: {},
        [navbar]: {},
        [pluginTooltip]: {},
        [customCodePlugin]: {},
        [typed]: {},
        [classes]: {},
      },
    });
    setEditor(editor);
  }, []);

  return (
    <>
      <div className="grapesjs-container">
        <div id="editor"></div>
      </div>

      <div id="gjs"></div>
    </>
  );
};

export default DragAndDrop;
