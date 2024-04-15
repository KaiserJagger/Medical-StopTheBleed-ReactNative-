import React, { Component } from "react";
import { StatusBar, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Router, Scene, Tabs, Stack, Actions, Reducer } from "react-native-router-flux";

//overrides
import { Text, View, Color } from "../components/stb/index";
import { Icon } from "react-native-elements";

// routes -------------------------
import Home from "./Home/";
import GetTheFacts from "./GetTheFacts/";
import TakeAction from "./TakeAction/";
import Resources from "./Resources/";
import TakeActionNonSerious from "./TakeActionNonSerious/";
import TakeActionSerious from "./TakeActionSerious/";
import SeriousOther from "./SeriousOther/";
import SeriousArmLeg from "./SeriousArmLeg/";
import SeriousFull from "./SeriousFull/";
import Quiz from "./Quiz/";
import PDFView from "./PDFView/";
import ModalView from "./ModalView/";
import MainVideo from "./MainVideo/";
import FullAudio from "./FullAudio/";

//assets
import Logo from "../assets/images/stb_logo.png";

// const RouterWithRedux = connect()(Router);
const getSceneStyle = () => ({
	backgroundColor: "white",
});

class NavTest extends React.Component {
	render() {
		return (
			<View
				leftComponent={
					<TouchableOpacity>
						<Icon name="sidebar" />
					</TouchableOpacity>
				}
				centerComponent={<Text>{props.title}</Text>}
			/>
		);
	}
}

class CustomIcon extends React.Component {
	render() {
		return (
			<Icon
				type={"font-awesome"}
				size={18}
				color={Color.bodyFont}
				containerStyle={{ padding: 0, margin: 0 }}
				{...this.props}
			/>
		);
	}
}
//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component {
	render() {
		var color = this.props.focused ? "white" : "white";
		return (
			<View vCenter hCenter paddingTop paddingBottom>
				<View flex>
					<CustomIcon color="white" name={this.props.iconName || "circle"} size={23} />
					<Text style={{ color, fontSize: 12 }}>{this.props.title}</Text>
				</View>
			</View>
		);
	}
}

const AppLogo = ({ title }) => {
	return (
		<View background="" flex style={{ padding: 0, marginBottom: 0, flexDirection: "row" }}>
			<Image source={Logo} style={{ resizeMode: "contain", height: "100%" }} />
		</View>
	);
};

const renderExitButton = () => {
	return (
		<View paddingRight>
			<TouchableOpacity
				onPress={() => {
					Actions.home();
				}}
			>
				<Text h4 color={Color.secondaryColor}>
					Exit
				</Text>
			</TouchableOpacity>
		</View>
	);
};

class RenderBar extends React.Component {
	render() {
		console.log(this.props);
		return (
			<View>
				<Text>Hello</Text>
			</View>
		);
	}
}

class AppNavigator extends Component {
	static propTypes = {};
	renderImage = () => {
		return <Image source={Logo} style={{ resizeMode: "contain", height: "100%" }} />;
	};
	render() {
		// eslint-disable-line class-methods-use-this
		StatusBar.setBarStyle("light-content", true);
		//StatusBar.setHidden(true);
		return (
			<View flex>
				<Router getSceneStyle={getSceneStyle}>
					<Scene
						key="root"
						showLabel={false}
						activeBackgroundColor={Color.secondaryColor}
						inactiveBackgroundColor="black"
						backButtonTintColor="white"
						hideNavBar
						back={true}
						navigationBarStyle={{
							backgroundColor: "black",
							padding: 0,
							margin: 0,
						}}
						tabBarStyle={{ height: 60 }}
						titleStyle={{ color: "white", fontSize: 18, alignSelf: "center" }}
						backTitle=""
					>
						<Scene
							key="actionNonSerious"
							title="Non-Serious Bleeding"
							hideNavBar
							component={TakeActionNonSerious}
						/>

						<Scene key="pdfView" title="PDF" component={PDFView} hideNavBar />
						<Scene
							key="actionSerious"
							title="Serious Bleeding"
							hideNavBar
							component={TakeActionSerious}
						/>
						<Scene
							key="actionSeriousArmLeg"
							title="Arms/Legs"
							hideNavBar
							onExit={() => {
								SeriousArmLeg.onExit3();
							}}
							component={SeriousArmLeg}
						/>
						<Scene key="actionSeriousOther" title="Other" hideNavBar component={SeriousOther} />
						<Scene
							key="actionSeriousFull"
							title="Full Tourniquet Application"
							hideNavBar
							component={SeriousFull}
						/>
						<Scene key="quiz" title="Quiz" component={Quiz} hideNavBar />
						<Scene key="mainVideo" title="Main Video" component={MainVideo} hideNavBar />
						<Scene key="applyFullAudio" title="Stop the Bleed" component={FullAudio} hideNavBar />
						<Scene key="initModal" hideNavBar initial>
							<Scene key="modalCore" title="Emergency?" hideNavBar={true} component={ModalView} />
							<Scene key="modalTakeAction" title="Take Action" hideNavBar component={TakeAction} />
						</Scene>
						<Tabs
							key="root2"
							tabs={true}
							tabBarPosition="bottom"
							swipeEnabled
							back={false}
							navigationBarTitleImage={require("../assets/images/stb_logo.png")}
							style={{ height: 50 }}
						>
							<Scene
								key="home"
								title="Home"
								iconName="home"
								back={false}
								hideNavBar
								icon={TabIcon}
								component={Home}
							/>
							<Scene
								key="action"
								title="Action"
								back={false}
								hideNavBar
								iconName="medkit"
								icon={TabIcon}
								component={TakeAction}
							/>
							<Scene
								key="facts"
								title="Facts"
								iconName="info"
								icon={TabIcon}
								hideNavBar
								back={false}
								component={GetTheFacts}
							/>
							<Scene
								key="resources"
								title="Resources"
								back={false}
								iconName="external-link"
								icon={TabIcon}
								hideNavBar
								component={Resources}
							/>
						</Tabs>
					</Scene>
				</Router>
			</View>
		);
	}
}

export default AppNavigator;
