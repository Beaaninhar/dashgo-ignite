
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Ana Beatriz</Text>
					<Text color="gray.300" fontSize="small">
						aninhabeatrizribeiro@gmail.com
					</Text>
				</Box>
			)}

			<Avatar
				size="md"
				name="Ana Beatriz"
				src="https://github.com/Beaaninhar.png"
			/>
		</Flex>
	)
}