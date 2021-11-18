import HeartBeatController from './heart_beat';

test('should return heartbeat message', async () => {
	const controller = new HeartBeatController();
	const response = await controller.getMessage();
	expect(response.message).toBe("I'm alive!");
});
