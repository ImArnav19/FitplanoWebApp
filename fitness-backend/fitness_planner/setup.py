from setuptools import setup, find_packages

setup(
    name='fitness_planner',  # Your package name, used when installing the package
    version='0.1',  # A version number, increment this with new releases
    packages=find_packages(),  # Automatically find and include all packages and subpackages
    install_requires=[
        'flask',  # Add any dependencies your package has. For example, Flask.
        'openai',  # If your package interacts with OpenAI's API, you'll need this.
        # Add other dependencies as needed
    ],
    author='Saket Shinoj',  # Your name or your organization's name
    author_email='saket.shinoj@gmail.com',  # Contact email
    description='A package for generating personalized fitness plans using OpenAI.',  # A short description of your package
    keywords='fitness, planner, openai, personalized plan',  # Keywords to help users find your package
    # You can also add other parameters like 'url' for the package's website or repository
)
