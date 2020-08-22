class ApplicationController < ActionController::API
    def test
      render json: { test: "Testing JSON parsing, success" }
    end
end
