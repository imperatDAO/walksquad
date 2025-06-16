import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles as LeaderboardStyle } from '../styles/LeaderboardStyle';
import { Friend } from '../../App';
import { CustomDropdown } from './CustomDropdown';

interface LeaderboardData {
    userId: string;
    name: string;
    dailySteps: {
        date: string;
        steps: number;
    }[];
    totalSteps: number;
}

type TimeRange = '3-day' | '7-day' | '30-day';

export default function LeaderboardScreen() {
    const [timeRange, setTimeRange] = useState<TimeRange>('3-day');
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardData[]>([]);
    const [mvp, setMvp] = useState<LeaderboardData | null>(null);

    useEffect(() => {
        fetchLeaderboardData(timeRange);
    }, [timeRange]);

    const fetchLeaderboardData = async (range: TimeRange) => {
        try {
            // TODO: Replace with actual API call
            const mockData: LeaderboardData[] = [
                {
                    userId: '1',
                    name: 'You',
                    dailySteps: [
                        { date: '2025-06-07', steps: 8000 },
                        { date: '2025-06-06', steps: 7500 },
                        { date: '2025-06-05', steps: 9000 },
                    ],
                    totalSteps: 24500
                },
            ];

            setLeaderboardData(mockData);

            // Find MVP
            const mvpUser = mockData.reduce((prev, current) =>
                prev.totalSteps > current.totalSteps ? prev : current
            );
            setMvp(mvpUser);
        } catch (error) {
            console.error('Error fetching leaderboard data:', error);
        }
    };

    const generateDatesArray = (range: TimeRange): string[] => {
        const dates: string[] = [];
        const today = new Date();

        const daysToShow = range === '3-day' ? 3 :
            range === '7-day' ? 7 : 30;

        for (let i = 0; i < daysToShow; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }

        return dates; 
    };

    const renderTableHeader = () => {
        const dates = generateDatesArray(timeRange);

        return (
            <View style={LeaderboardStyle.headerRow}>
                <Text style={LeaderboardStyle.headerCell}>User</Text>
                <Text style={LeaderboardStyle.headerCell}>Total</Text>
                {dates.map(date => (
                    <Text key={date} style={LeaderboardStyle.headerCell}>
                        {new Date(date).toLocaleDateString()}
                    </Text>
                ))}
            </View>
        );
    };

    const renderTableRow = (data: LeaderboardData) => {
        const dates = generateDatesArray(timeRange);

        return (
            <View key={data.userId} style={LeaderboardStyle.row}>
                <Text style={LeaderboardStyle.cell}>{data.name}</Text>
                <Text style={LeaderboardStyle.cell}>{data.totalSteps}</Text>
                {dates.map(date => {
                    const dailyData = data.dailySteps.find(d => d.date === date);
                    return (
                        <Text key={date} style={LeaderboardStyle.cell}>
                            {dailyData ? dailyData.steps : 0}
                        </Text>
                    );
                })}
            </View>
        );
    };

    return (
        <View style={LeaderboardStyle.container}>
            <View style={LeaderboardStyle.header}>
                <Text style={LeaderboardStyle.title}>Leaderboard</Text>
                <CustomDropdown
                    options={[
                        { label: '3 Days', value: '3-day' },
                        { label: '7 Days', value: '7-day' },
                        { label: '30 Days', value: '30-day' },
                    ]}
                    selectedValue={timeRange}
                    onValueChange={(value) => setTimeRange(value as TimeRange)}
                />
            </View>

            <ScrollView horizontal>
                <View style={LeaderboardStyle.table}>
                    {renderTableHeader()}
                    {leaderboardData.map(data => renderTableRow(data))}
                </View>
            </ScrollView>

            {mvp && (
                <View style={LeaderboardStyle.mvpContainer}>
                    <Text style={LeaderboardStyle.mvpTitle}>MVP</Text>
                    <Text style={LeaderboardStyle.mvpText}>
                        {mvp.name} - {mvp.totalSteps} steps
                    </Text>
                </View>
            )}
        </View>
    );
}