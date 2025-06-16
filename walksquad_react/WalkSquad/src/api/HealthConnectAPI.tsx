import {
  initialize,
  requestPermission,
  readRecords,
} from 'react-native-health-connect';

const readSampleData = async () => {
  await initialize();
  const startDate = new Date();
  startDate.setHours(0,0,0,0);
  const endDate = new Date();
  
  await requestPermission([
    { accessType: 'read', recordType: 'Steps' },
  ]);

  const { records } = await readRecords('Steps', {
    timeRangeFilter: {
      operator: 'between',
      startTime: startDate.toISOString(),
      endTime: endDate.toISOString(),
    },
  });
  return records;
};

export default readSampleData;
