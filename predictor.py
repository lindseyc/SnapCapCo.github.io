from __future__ import division, print_function
import sys
import os
import glob
import re
import random
from pathlib import Path

# Import fast.ai Library
from fastai import *
from fastai.vision import *

# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename


#load model
def load_model(model_path):
    path = Path(model_path)
    classes = ['happy', 'sad','disgustedzip', 'angryzip']
    data2 = ImageDataBunch.single_from_classes(path, classes, ds_tfms=get_transforms(), size=224).normalize(imagenet_stats)
    learn = create_cnn(data2, models.resnet34)
    learn.load('stage-2')
    return learn

def model_predict(img_path, model_path):
    """
       model_predict will return the preprocessed image
    """
    learn = load_model(model_path)
    img = open_image(img_path)
    pred_class,pred_idx,outputs = learn.predict(img)
    caption = generate_caption(pred_class)
    return caption

def generate_caption(pred_class):
    if pred_class == "happy":
        return ("happy", getSongData("happysongs.csv"))
    if pred_class == "sad":
        return ("sad", getSongData("sadsongs.csv"))
    if pred_class == "angry":
        return ("angry", getSongData("angrysongs.csv"))
    if pred_class == "disgusted":
        return ("disgusted", getSongData("disgustedsongs.csv"))

def getSongData(fileName):
    with open(fileName, mode='r') as csvFile:
        row_count = sum(1 for row in csvFile)
        randValue = random.randint(0,row_count+1)
        title = csvFile[randValue][0]
        artist = csvFile[randValue][1]
        lyric = csvFile[randValue][2]
        songTuple = (title, artist, lyric)
        return songTuple
