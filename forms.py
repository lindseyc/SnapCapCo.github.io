# forms.py

from django import forms
from .models import *

class MoodAnalysis(forms.ModelForm):

    class Meta:
        model = MoodAnalyzer    # not sure if our model has a sentiment field or if it is generated
        fields = ['sentiment', 'image']
