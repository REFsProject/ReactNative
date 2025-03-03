import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import RefsVideo from "~/components/video/RefsVideo";
import SignIn from "~/app/login/SignIn";
import Message from "~/app/(tabs)/Message";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/RefsVideo">
                <RefsVideo/>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/SignIn">
                <SignIn/>
            </ComponentPreview>
            <ComponentPreview path="/Message">
                <Message/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;