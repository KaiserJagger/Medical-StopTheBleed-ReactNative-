import * as React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import { Text, View, Button, Icon } from "../../components/stb/index";
//import Expo from 'expo';
import Sound from "react-native-sound";
import _ from "lodash";

export default class SwipeAudioIcon extends React.Component {
	constructor(props) {
		super(props);
		Sound.setCategory("Playback");
		this.state = { isPlaying: false };
	}

	toggleAudio = () => {
		if (this.state.isPlaying) {
			this.pauseAudio();
			return;
		}
		this.playAudio();
	};
	playAudio = () => {
		let soundData = this.props.data;
		let source = soundData.source;
		if (soundData.object != null) {
			soundData.object.stop();
		}

		soundData.object = new Sound(soundData.source, (error) => {
			if (error) {
				console.log("failed to load the sound", error);
				return;
			}
			soundData.object.play((success) => {
				this.setState({ isPlaying: false });
				if (success) {
					console.log("successfully finished playing");
				} else {
					console.log("playback failed due to audio decoding errors");
					// reset the player to its uninitialized state (android only)
					// this is the only option to recover after an error occured and use the player again
					soundData.object.reset();
				}
			});
			this.setState({ isPlaying: true });
		});

		// Play the sound with an onEnd callback
	};
	pauseAudio = () => {
		let soundData = this.props.data;
		if (soundData.object) {
			soundData.object.pause();
		}

		this.setState({ isPlaying: false });
	};
	stopAudio = () => {
		let soundData = this.props.data;
		if (soundData.object) {
			soundData.object.stop();
		}
		this.setState({ isPlaying: false });
	};
	renderIcons = () => {
		if (this.state.isPlaying) {
			return (
				<Icon
					name="pause"
					size={30}
					// raised
					color="white"
					onPress={() => {
						this.pauseAudio();
					}}
					containerStyle={{ padding: 20, backgroundColor: "#1D4E71", borderRadius: 40 }}
				/>
			);
		}

		return (
			<Icon
				name="volume-up"
				// raised
				size={30}
				color="white"
				onPress={() => {
					this.playAudio();
				}}
				containerStyle={{ padding: 20, backgroundColor: "#1D4E71", borderRadius: 40 }}
			/>
		);
	};
	render() {
		if (this.props.data.source) {
			return (
				<View
					style={{
						position: "absolute",
						right: 10,
						top: 10,
						zIndex: 100,
					}}
				>
					{this.renderIcons()}
				</View>
			);
		}
		return <View />;
	}
}
