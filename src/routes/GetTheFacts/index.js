/* @flow */

import * as React from "react";
import { StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import Accordion from "react-native-collapsible/Accordion";
import HTMLView from "react-native-htmlview";
import { Text, View, Button, Icon, UUID, Link, HR, Color } from "../../components/stb/index";
import Image1 from "../../assets/images/non-serious.jpg";
import Header from "../../components/Header";

import SECTIONS from "./data";
import glossaryData from "./glossary";

function renderNode(node, index, siblings, parent, defaultRenderer) {
	if (node.name == "p") {
		const specialSyle = node.attribs.style;
		return <Text key={index}>{defaultRenderer(node.children, parent)}</Text>;
	} else if (node.name == "a") {
		const specialSyle = node.attribs.style;
		return (
			<Link link={node.attribs.href} key={index}>
				{defaultRenderer(node.children, parent)}
			</Link>
		);
	}
}

export default class CurrentStateIndicator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ActiveSection: null,
			ActiveSection2: null,
		};
	}
	_renderHeader(section, index, isActive) {
		return (
			<View row padding background={"#eee"} style={{ marginBottom: 5 }}>
				<View vCenter background="">
					<Icon name={isActive ? "minus" : "plus"} />
				</View>
				<View marginLeft marginRight background="">
					<Text>{section.title}</Text>
				</View>
			</View>
		);
	}
	_renderSourceButton = (section) => {
		if (section.button) {
			return (
				<View marginTop>
					<Button title="See Source" onPress={Actions[section.button]} />
				</View>
			);
		}
	};
	_renderContent = (section) => {
		return (
			<View paddingLeft marginBottom>
				<HTMLView value={section.content} renderNode={renderNode} />
				{this._renderSourceButton(section)}
			</View>
		);
	};

	render() {
		return (
			<View flex>
				<Header title="Get the Facts" template="tabs" />
				<ScrollView>
					<View padding background={Color.secondaryColor}>
						<Text h2 color="white" center>
							Get the Facts
						</Text>
					</View>
					<View padding>
						<View>
							<Text h3>How Much Do You Know about Tourniquets?</Text>
						</View>
						<View marginTop>
							<Text>
								Think you know all there is to know about tourniquets? Take this quick quiz and see
								just how much you know.
							</Text>
						</View>
						<View>
							<Button
								color="white"
								style={{ marginTop: 15 }}
								onPress={Actions.quiz}
								title="Begin Quiz"
							/>
						</View>
						<HR />
						<View>
							<View>
								<Text h3>Tourniquet FAQ</Text>
							</View>
							<View marginTop>
								<Text>
									Get the answers to the most frequently asked questions about tourniquets, their
									safety, and their use.
								</Text>
							</View>
							<View paddingTop>
								<View>
									<Accordion
										underlayColor={Color.tertiaryColor}
										sections={SECTIONS}
										activeSections={this.state.ActiveSection}
										renderHeader={this._renderHeader}
										renderContent={this._renderContent}
										renderAsFlatList={false}
										touchableComponent={TouchableOpacity}
										duration={400}
										onChange={(e) => this.setState({ ActiveSection: e })}
									/>
								</View>
							</View>
						</View>
						<HR />
						<View>
							<View>
								<Text h3>Glossary</Text>
							</View>
							<View paddingTop>
								<View>
									<Accordion
										activeSections={this.state.ActiveSection2}
										underlayColor={Color.tertiaryColor}
										sections={glossaryData}
										renderHeader={this._renderHeader}
										renderContent={this._renderContent}
										onChange={(e) => this.setState({ ActiveSection2: e })}
									/>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
