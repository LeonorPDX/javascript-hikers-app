class HikesController < ApplicationController

    def index
        th = Trailhead.find(params[:trailhead_id])
        hikes = th.hikes
        render json: hikes
    end

    def create
        h = Hike.create(name: params[:name],
                        difficulty: params[:difficulty],
                        distance: params[:distance],
                        elevation_gain: params[:elevation_gain],
                        hike_type: params[:hike_type], 
                        image_url: params[:image_url],
                        description: params[:description],
                        trailhead_id: params[:trailhead_id])

        th = Trailhead.find(params[:trailhead_id])
        hikes = th.hikes
        render json: hikes        
    end
end

