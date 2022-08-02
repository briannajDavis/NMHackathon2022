import csv
#import pandas as pd
filepath = 'application/src/surveyresults.csv'
with open(filepath,'r') as File:
    content = csv.reader(File)
    user_data = list(content)

def get_matches():
    with open('matches.csv','w',newline='') as f:
        writer = csv.writer(f)
        for user1 in user_data:
            matches = [['Blank', 0], ['Blank', 0], ['Blank', 0]]  # Name, Percent
            for user2 in user_data:
                if user1 != user2:
                    num_same = num_same_answers(user1, user2)
                    if num_same > matches[2][1]:
                        matches[2] = [get_name(user2), num_same]
                        sort(matches)
            #print(matches)
            writer.writerow([user1[0]+user1[1],matches[0][0],matches[1][0],matches[2][0]])
    
def sort(arr):
    if arr[2][1]>arr[1][1]:
        temp = arr[2]
        arr[2] = arr[1]
        arr[1] = temp
    if arr[1][1]>arr[0][1]:
        temp = arr[1]
        arr[1] = arr[0]
        arr[0] = temp
def get_name(user):
    return user[0] + user[1]
def num_same_answers(answers1, answers2):
    num_same = 0
    i = 0
    for answer1 in answers1:
        answer2 = answers2[i]
        if (answer1 == answer2):
            num_same += 1
        i += 1
    return num_same
dictionary = {}
get_matches()




    
