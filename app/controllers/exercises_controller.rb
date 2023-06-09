class ExercisesController < ApplicationController
  def index
    if params[:type].present?
      @exercises = Exercise.includes(:user).where(exercises_type: params[:type])
     
    else
      @exercises = Exercise.includes(:user).all
    end
  end
    
      # GET /exercises/:id
      def show
        @exercise = Exercise.find(params[:id])
        @exercise_type=@exercise.exercises_type
        @file_name = "#{params[:id]}.json"
      end
      
      # GET /exercise/new
      def new
        @exercise = Exercise.new
      end
    
      # POST /exercises
      def create
       
        data = JSON.parse(request.body.read)
        
        @exercise= Exercise.new(user_id:Current.user.id,title: data["name"],exercises_type: data["type"] );
        problem = data["problems"][0]
       
        if  data["type"]=="CFL"
          problem["type"]="GRAMMAR"
        elsif  data["type"]=="FA"
          problem["type"]="DFA"
        elsif  data["type"]=="grammar"
          problem["type"]="GRAMMAR"
        elsif  data["type"]=="PDA"
          problem["type"]="PDA"
        elsif  data["type"]=="Regular"
          problem["type"]="REGEXP"
        elsif  data["type"]=="TM"
          problem["type"]="TM"
        end
        json_file=[problem]
        json_file=JSON.generate(json_file)
        #render json: { message: @submission.id }
        
        if @exercise.save
          file_name = "#{@exercise.id}.json"
          File.open(Rails.root.join('public', 'exercises_file', file_name), 'wb') do |file|
            file.write(json_file)
          end
          redirect_to @exercise, notice: 'Exercise was successfully created.'
        else
          render :new
        end
      

       

      



       

      end
      

      # GET /exercises/:id/edit
      def edit
        @exercise = Exercise.find(params[:id])
      end
    
      # PATCH/PUT /exercises/:id
      def update
        @exercise = Exercise.find(params[:id])
    
        if @exercise.update(exercise_params)
          redirect_to @exercise, notice: 'Exercise was successfully updated.'
        else
          render :edit
        end
      end
    
      # DELETE /exercises/:id
      def destroy
        @exercise = Exercise.find(params[:id])
        @exercise.destroy
    
        redirect_to exercises_url, notice: 'Exercise was successfully destroyed.'
      end
    
      private
    
      def exercise_params
        params.require(:exercise).permit(:name)
      end
end
